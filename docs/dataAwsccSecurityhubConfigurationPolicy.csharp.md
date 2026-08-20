# `dataAwsccSecurityhubConfigurationPolicy` Submodule <a name="`dataAwsccSecurityhubConfigurationPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSecurityhubConfigurationPolicy <a name="DataAwsccSecurityhubConfigurationPolicy" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/securityhub_configuration_policy awscc_securityhub_configuration_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubConfigurationPolicy(Construct Scope, string Id, DataAwsccSecurityhubConfigurationPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig">DataAwsccSecurityhubConfigurationPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig">DataAwsccSecurityhubConfigurationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSecurityhubConfigurationPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSecurityhubConfigurationPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSecurityhubConfigurationPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSecurityhubConfigurationPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSecurityhubConfigurationPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccSecurityhubConfigurationPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSecurityhubConfigurationPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSecurityhubConfigurationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/securityhub_configuration_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSecurityhubConfigurationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.configurationPolicy">ConfigurationPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.configurationPolicyId">ConfigurationPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.serviceEnabled">ServiceEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ConfigurationPolicy`<sup>Required</sup> <a name="ConfigurationPolicy" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.configurationPolicy"></a>

```csharp
public DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference ConfigurationPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference</a>

---

##### `ConfigurationPolicyId`<sup>Required</sup> <a name="ConfigurationPolicyId" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.configurationPolicyId"></a>

```csharp
public string ConfigurationPolicyId { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServiceEnabled`<sup>Required</sup> <a name="ServiceEnabled" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.serviceEnabled"></a>

```csharp
public IResolvable ServiceEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSecurityhubConfigurationPolicyConfig <a name="DataAwsccSecurityhubConfigurationPolicyConfig" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubConfigurationPolicyConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/securityhub_configuration_policy#id DataAwsccSecurityhubConfigurationPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSecurityhubConfigurationPolicyConfigurationPolicy <a name="DataAwsccSecurityhubConfigurationPolicyConfigurationPolicy" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubConfigurationPolicyConfigurationPolicy {

};
```


### DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHub <a name="DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHub" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHub.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHub {

};
```


### DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration <a name="DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration {

};
```


### DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters <a name="DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters {

};
```


### DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters <a name="DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters {

};
```


### DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue <a name="DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference <a name="DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.securityHub">SecurityHub</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicy">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityHub`<sup>Required</sup> <a name="SecurityHub" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.securityHub"></a>

```csharp
public DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference SecurityHub { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityhubConfigurationPolicyConfigurationPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicy">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicy</a>

---


### DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference <a name="DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.enabledStandardIdentifiers">EnabledStandardIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.securityControlsConfiguration">SecurityControlsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.serviceEnabled">ServiceEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHub">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledStandardIdentifiers`<sup>Required</sup> <a name="EnabledStandardIdentifiers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.enabledStandardIdentifiers"></a>

```csharp
public string[] EnabledStandardIdentifiers { get; }
```

- *Type:* string[]

---

##### `SecurityControlsConfiguration`<sup>Required</sup> <a name="SecurityControlsConfiguration" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.securityControlsConfiguration"></a>

```csharp
public DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference SecurityControlsConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference</a>

---

##### `ServiceEnabled`<sup>Required</sup> <a name="ServiceEnabled" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.serviceEnabled"></a>

```csharp
public IResolvable ServiceEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHub InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHub">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHub</a>

---


### DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference <a name="DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.disabledSecurityControlIdentifiers">DisabledSecurityControlIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.enabledSecurityControlIdentifiers">EnabledSecurityControlIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.securityControlCustomParameters">SecurityControlCustomParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisabledSecurityControlIdentifiers`<sup>Required</sup> <a name="DisabledSecurityControlIdentifiers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.disabledSecurityControlIdentifiers"></a>

```csharp
public string[] DisabledSecurityControlIdentifiers { get; }
```

- *Type:* string[]

---

##### `EnabledSecurityControlIdentifiers`<sup>Required</sup> <a name="EnabledSecurityControlIdentifiers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.enabledSecurityControlIdentifiers"></a>

```csharp
public string[] EnabledSecurityControlIdentifiers { get; }
```

- *Type:* string[]

---

##### `SecurityControlCustomParameters`<sup>Required</sup> <a name="SecurityControlCustomParameters" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.securityControlCustomParameters"></a>

```csharp
public DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList SecurityControlCustomParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration</a>

---


### DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList <a name="DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.get"></a>

```csharp
private DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference <a name="DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.securityControlId">SecurityControlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.parameters"></a>

```csharp
public DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap</a>

---

##### `SecurityControlId`<sup>Required</sup> <a name="SecurityControlId" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.securityControlId"></a>

```csharp
public string SecurityControlId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters</a>

---


### DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap <a name="DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.get"></a>

```csharp
private DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference <a name="DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.valueType">ValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.value"></a>

```csharp
public DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference Value { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference</a>

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.valueType"></a>

```csharp
public string ValueType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters</a>

---


### DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference <a name="DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.boolean">Boolean</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.double">Double</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.enum">Enum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.enumList">EnumList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.integer">Integer</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.integerList">IntegerList</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.string">String</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.stringList">StringList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Boolean`<sup>Required</sup> <a name="Boolean" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.boolean"></a>

```csharp
public IResolvable Boolean { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Double`<sup>Required</sup> <a name="Double" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.double"></a>

```csharp
public double Double { get; }
```

- *Type:* double

---

##### `Enum`<sup>Required</sup> <a name="Enum" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.enum"></a>

```csharp
public string Enum { get; }
```

- *Type:* string

---

##### `EnumList`<sup>Required</sup> <a name="EnumList" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.enumList"></a>

```csharp
public string[] EnumList { get; }
```

- *Type:* string[]

---

##### `Integer`<sup>Required</sup> <a name="Integer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.integer"></a>

```csharp
public double Integer { get; }
```

- *Type:* double

---

##### `IntegerList`<sup>Required</sup> <a name="IntegerList" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.integerList"></a>

```csharp
public double[] IntegerList { get; }
```

- *Type:* double[]

---

##### `String`<sup>Required</sup> <a name="String" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.string"></a>

```csharp
public string String { get; }
```

- *Type:* string

---

##### `StringList`<sup>Required</sup> <a name="StringList" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.stringList"></a>

```csharp
public string[] StringList { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue</a>

---



