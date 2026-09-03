# `dataAwsccSsoInstanceAccessControlAttributeConfiguration` Submodule <a name="`dataAwsccSsoInstanceAccessControlAttributeConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSsoInstanceAccessControlAttributeConfiguration <a name="DataAwsccSsoInstanceAccessControlAttributeConfiguration" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sso_instance_access_control_attribute_configuration awscc_sso_instance_access_control_attribute_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsoInstanceAccessControlAttributeConfiguration(Construct Scope, string Id, DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig">DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig">DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSsoInstanceAccessControlAttributeConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSsoInstanceAccessControlAttributeConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSsoInstanceAccessControlAttributeConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSsoInstanceAccessControlAttributeConfiguration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSsoInstanceAccessControlAttributeConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccSsoInstanceAccessControlAttributeConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSsoInstanceAccessControlAttributeConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSsoInstanceAccessControlAttributeConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sso_instance_access_control_attribute_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSsoInstanceAccessControlAttributeConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.accessControlAttributes">AccessControlAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList">DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.instanceAccessControlAttributeConfiguration">InstanceAccessControlAttributeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference">DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AccessControlAttributes`<sup>Required</sup> <a name="AccessControlAttributes" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.accessControlAttributes"></a>

```csharp
public DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList AccessControlAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList">DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList</a>

---

##### `InstanceAccessControlAttributeConfiguration`<sup>Required</sup> <a name="InstanceAccessControlAttributeConfiguration" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.instanceAccessControlAttributeConfiguration"></a>

```csharp
public DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference InstanceAccessControlAttributeConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference">DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference</a>

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributes <a name="DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributes" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributes {

};
```


### DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue <a name="DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue {

};
```


### DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig <a name="DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sso_instance_access_control_attribute_configuration#id DataAwsccSsoInstanceAccessControlAttributeConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration <a name="DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration {

};
```


### DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes <a name="DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes {

};
```


### DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue <a name="DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList <a name="DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get"></a>

```csharp
private DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference <a name="DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference">DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributes">DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.value"></a>

```csharp
public DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference Value { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference">DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributes">DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>

---


### DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference <a name="DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.source">Source</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.source"></a>

```csharp
public string[] Source { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a>

---


### DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList <a name="DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get"></a>

```csharp
private DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference <a name="DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference">DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes">DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.value"></a>

```csharp
public DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference Value { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference">DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes">DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>

---


### DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference <a name="DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.source">Source</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.source"></a>

```csharp
public string[] Source { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a>

---


### DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference <a name="DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.accessControlAttributes">AccessControlAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList">DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration">DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessControlAttributes`<sup>Required</sup> <a name="AccessControlAttributes" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.accessControlAttributes"></a>

```csharp
public DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList AccessControlAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList">DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration">DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration</a>

---



