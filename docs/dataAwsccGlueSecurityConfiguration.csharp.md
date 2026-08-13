# `dataAwsccGlueSecurityConfiguration` Submodule <a name="`dataAwsccGlueSecurityConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGlueSecurityConfiguration <a name="DataAwsccGlueSecurityConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/glue_security_configuration awscc_glue_security_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueSecurityConfiguration(Construct Scope, string Id, DataAwsccGlueSecurityConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig">DataAwsccGlueSecurityConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig">DataAwsccGlueSecurityConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGlueSecurityConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGlueSecurityConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGlueSecurityConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGlueSecurityConfiguration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGlueSecurityConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccGlueSecurityConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccGlueSecurityConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccGlueSecurityConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/glue_security_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGlueSecurityConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference">DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.encryptionConfiguration"></a>

```csharp
public DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference">DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGlueSecurityConfigurationConfig <a name="DataAwsccGlueSecurityConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueSecurityConfigurationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/glue_security_configuration#id DataAwsccGlueSecurityConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGlueSecurityConfigurationEncryptionConfiguration <a name="DataAwsccGlueSecurityConfigurationEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueSecurityConfigurationEncryptionConfiguration {

};
```


### DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption <a name="DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption {

};
```


### DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption <a name="DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption {

};
```


### DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions <a name="DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference <a name="DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.cloudwatchEncryptionMode">CloudwatchEncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption">DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchEncryptionMode`<sup>Required</sup> <a name="CloudwatchEncryptionMode" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.cloudwatchEncryptionMode"></a>

```csharp
public string CloudwatchEncryptionMode { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption">DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption</a>

---


### DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference <a name="DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.jobBookmarksEncryptionMode">JobBookmarksEncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption">DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JobBookmarksEncryptionMode`<sup>Required</sup> <a name="JobBookmarksEncryptionMode" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.jobBookmarksEncryptionMode"></a>

```csharp
public string JobBookmarksEncryptionMode { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption">DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption</a>

---


### DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference <a name="DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.cloudwatchEncryption">CloudwatchEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference">DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.jobBookmarksEncryption">JobBookmarksEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference">DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.s3Encryptions">S3Encryptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList">DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfiguration">DataAwsccGlueSecurityConfigurationEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchEncryption`<sup>Required</sup> <a name="CloudwatchEncryption" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.cloudwatchEncryption"></a>

```csharp
public DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference CloudwatchEncryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference">DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference</a>

---

##### `JobBookmarksEncryption`<sup>Required</sup> <a name="JobBookmarksEncryption" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.jobBookmarksEncryption"></a>

```csharp
public DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference JobBookmarksEncryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference">DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference</a>

---

##### `S3Encryptions`<sup>Required</sup> <a name="S3Encryptions" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.s3Encryptions"></a>

```csharp
public DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList S3Encryptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList">DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGlueSecurityConfigurationEncryptionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfiguration">DataAwsccGlueSecurityConfigurationEncryptionConfiguration</a>

---


### DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList <a name="DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.get"></a>

```csharp
private DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference <a name="DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.s3EncryptionMode">S3EncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions">DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `S3EncryptionMode`<sup>Required</sup> <a name="S3EncryptionMode" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.s3EncryptionMode"></a>

```csharp
public string S3EncryptionMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions">DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions</a>

---



