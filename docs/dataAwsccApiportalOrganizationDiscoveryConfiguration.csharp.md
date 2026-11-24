# `dataAwsccApiportalOrganizationDiscoveryConfiguration` Submodule <a name="`dataAwsccApiportalOrganizationDiscoveryConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApiportalOrganizationDiscoveryConfiguration <a name="DataAwsccApiportalOrganizationDiscoveryConfiguration" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apiportal_organization_discovery_configuration awscc_apiportal_organization_discovery_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalOrganizationDiscoveryConfiguration(Construct Scope, string Id, DataAwsccApiportalOrganizationDiscoveryConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig">DataAwsccApiportalOrganizationDiscoveryConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig">DataAwsccApiportalOrganizationDiscoveryConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApiportalOrganizationDiscoveryConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApiportalOrganizationDiscoveryConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApiportalOrganizationDiscoveryConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApiportalOrganizationDiscoveryConfiguration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApiportalOrganizationDiscoveryConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccApiportalOrganizationDiscoveryConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccApiportalOrganizationDiscoveryConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccApiportalOrganizationDiscoveryConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apiportal_organization_discovery_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApiportalOrganizationDiscoveryConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.discoveryConfigurationStatus">DiscoveryConfigurationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.discoveryFeatures">DiscoveryFeatures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.discoveryFilters">DiscoveryFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference">DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.discoverySources">DiscoverySources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList">DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DiscoveryConfigurationStatus`<sup>Required</sup> <a name="DiscoveryConfigurationStatus" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.discoveryConfigurationStatus"></a>

```csharp
public string DiscoveryConfigurationStatus { get; }
```

- *Type:* string

---

##### `DiscoveryFeatures`<sup>Required</sup> <a name="DiscoveryFeatures" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.discoveryFeatures"></a>

```csharp
public string[] DiscoveryFeatures { get; }
```

- *Type:* string[]

---

##### `DiscoveryFilters`<sup>Required</sup> <a name="DiscoveryFilters" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.discoveryFilters"></a>

```csharp
public DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference DiscoveryFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference">DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference</a>

---

##### `DiscoverySources`<sup>Required</sup> <a name="DiscoverySources" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.discoverySources"></a>

```csharp
public string[] DiscoverySources { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.tags"></a>

```csharp
public DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList">DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApiportalOrganizationDiscoveryConfigurationConfig <a name="DataAwsccApiportalOrganizationDiscoveryConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalOrganizationDiscoveryConfigurationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apiportal_organization_discovery_configuration#id DataAwsccApiportalOrganizationDiscoveryConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFilters <a name="DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFilters" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFilters {

};
```


### DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters <a name="DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters {

};
```


### DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters <a name="DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters {

};
```


### DataAwsccApiportalOrganizationDiscoveryConfigurationTags <a name="DataAwsccApiportalOrganizationDiscoveryConfigurationTags" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalOrganizationDiscoveryConfigurationTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference <a name="DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.accountIds">AccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.organizationalUnitIds">OrganizationalUnitIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.resourceArns">ResourceArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.accountIds"></a>

```csharp
public string[] AccountIds { get; }
```

- *Type:* string[]

---

##### `OrganizationalUnitIds`<sup>Required</sup> <a name="OrganizationalUnitIds" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.organizationalUnitIds"></a>

```csharp
public string[] OrganizationalUnitIds { get; }
```

- *Type:* string[]

---

##### `ResourceArns`<sup>Required</sup> <a name="ResourceArns" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.resourceArns"></a>

```csharp
public string[] ResourceArns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a>

---


### DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference <a name="DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.accountIds">AccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.organizationalUnitIds">OrganizationalUnitIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.accountIds"></a>

```csharp
public string[] AccountIds { get; }
```

- *Type:* string[]

---

##### `OrganizationalUnitIds`<sup>Required</sup> <a name="OrganizationalUnitIds" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.organizationalUnitIds"></a>

```csharp
public string[] OrganizationalUnitIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a>

---


### DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference <a name="DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.exclusionFilters">ExclusionFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference">DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.inclusionFilters">InclusionFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference">DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExclusionFilters`<sup>Required</sup> <a name="ExclusionFilters" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.exclusionFilters"></a>

```csharp
public DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference ExclusionFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference">DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference</a>

---

##### `InclusionFilters`<sup>Required</sup> <a name="InclusionFilters" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.inclusionFilters"></a>

```csharp
public DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference InclusionFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference">DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a>

---


### DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList <a name="DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.get"></a>

```csharp
private DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference <a name="DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTags">DataAwsccApiportalOrganizationDiscoveryConfigurationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApiportalOrganizationDiscoveryConfigurationTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTags">DataAwsccApiportalOrganizationDiscoveryConfigurationTags</a>

---



