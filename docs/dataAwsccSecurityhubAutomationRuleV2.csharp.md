# `dataAwsccSecurityhubAutomationRuleV2` Submodule <a name="`dataAwsccSecurityhubAutomationRuleV2` Submodule" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSecurityhubAutomationRuleV2 <a name="DataAwsccSecurityhubAutomationRuleV2" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/securityhub_automation_rule_v2 awscc_securityhub_automation_rule_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2(Construct Scope, string Id, DataAwsccSecurityhubAutomationRuleV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2Config">DataAwsccSecurityhubAutomationRuleV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2Config">DataAwsccSecurityhubAutomationRuleV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSecurityhubAutomationRuleV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSecurityhubAutomationRuleV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSecurityhubAutomationRuleV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSecurityhubAutomationRuleV2.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSecurityhubAutomationRuleV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccSecurityhubAutomationRuleV2 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSecurityhubAutomationRuleV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSecurityhubAutomationRuleV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/securityhub_automation_rule_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSecurityhubAutomationRuleV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsList">DataAwsccSecurityhubAutomationRuleV2ActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.criteria">Criteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference">DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.ruleArn">RuleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.ruleId">RuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.ruleOrder">RuleOrder</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.ruleStatus">RuleStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.actions"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2ActionsList Actions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsList">DataAwsccSecurityhubAutomationRuleV2ActionsList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.criteria"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference Criteria { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference">DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `RuleArn`<sup>Required</sup> <a name="RuleArn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.ruleArn"></a>

```csharp
public string RuleArn { get; }
```

- *Type:* string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.ruleId"></a>

```csharp
public string RuleId { get; }
```

- *Type:* string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

##### `RuleOrder`<sup>Required</sup> <a name="RuleOrder" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.ruleOrder"></a>

```csharp
public double RuleOrder { get; }
```

- *Type:* double

---

##### `RuleStatus`<sup>Required</sup> <a name="RuleStatus" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.ruleStatus"></a>

```csharp
public string RuleStatus { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSecurityhubAutomationRuleV2Actions <a name="DataAwsccSecurityhubAutomationRuleV2Actions" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2Actions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2Actions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2Actions {

};
```


### DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration <a name="DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration {

};
```


### DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdate <a name="DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdate" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdate {

};
```


### DataAwsccSecurityhubAutomationRuleV2Config <a name="DataAwsccSecurityhubAutomationRuleV2Config" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2Config {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2Config.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/securityhub_automation_rule_v2#id DataAwsccSecurityhubAutomationRuleV2#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSecurityhubAutomationRuleV2Criteria <a name="DataAwsccSecurityhubAutomationRuleV2Criteria" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2Criteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2Criteria.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2Criteria {

};
```


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria {

};
```


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters {

};
```


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters {

};
```


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter {

};
```


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters {

};
```


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter {

};
```


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange {

};
```


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters {

};
```


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter {

};
```


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters {

};
```


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter {

};
```


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters {

};
```


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference <a name="DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.connectorArn">ConnectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration">DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectorArn`<sup>Required</sup> <a name="ConnectorArn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.connectorArn"></a>

```csharp
public string ConnectorArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration">DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration</a>

---


### DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference <a name="DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.severityId">SeverityId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.statusId">StatusId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdate">DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `SeverityId`<sup>Required</sup> <a name="SeverityId" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.severityId"></a>

```csharp
public double SeverityId { get; }
```

- *Type:* double

---

##### `StatusId`<sup>Required</sup> <a name="StatusId" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.statusId"></a>

```csharp
public double StatusId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdate">DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdate</a>

---


### DataAwsccSecurityhubAutomationRuleV2ActionsList <a name="DataAwsccSecurityhubAutomationRuleV2ActionsList" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2ActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsList.get"></a>

```csharp
private DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference <a name="DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.property.externalIntegrationConfiguration">ExternalIntegrationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference">DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.property.findingFieldsUpdate">FindingFieldsUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference">DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2Actions">DataAwsccSecurityhubAutomationRuleV2Actions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExternalIntegrationConfiguration`<sup>Required</sup> <a name="ExternalIntegrationConfiguration" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.property.externalIntegrationConfiguration"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference ExternalIntegrationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference">DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference</a>

---

##### `FindingFieldsUpdate`<sup>Required</sup> <a name="FindingFieldsUpdate" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.property.findingFieldsUpdate"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference FindingFieldsUpdate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference">DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2Actions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2Actions">DataAwsccSecurityhubAutomationRuleV2Actions</a>

---


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.value">Value</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.value"></a>

```csharp
public IResolvable Value { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter</a>

---


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.get"></a>

```csharp
private DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.filter"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters</a>

---


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange</a>

---


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.dateRange">DateRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.end">End</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.start">Start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DateRange`<sup>Required</sup> <a name="DateRange" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.dateRange"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference DateRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference</a>

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.end"></a>

```csharp
public string End { get; }
```

- *Type:* string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.start"></a>

```csharp
public string Start { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter</a>

---


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.get"></a>

```csharp
private DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.filter"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters</a>

---


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.get"></a>

```csharp
private DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter</a>

---


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.get"></a>

```csharp
private DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.filter"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters</a>

---


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.eq">Eq</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.gte">Gte</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.lte">Lte</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Eq`<sup>Required</sup> <a name="Eq" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.eq"></a>

```csharp
public double Eq { get; }
```

- *Type:* double

---

##### `Gte`<sup>Required</sup> <a name="Gte" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.gte"></a>

```csharp
public double Gte { get; }
```

- *Type:* double

---

##### `Lte`<sup>Required</sup> <a name="Lte" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.lte"></a>

```csharp
public double Lte { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter</a>

---


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.get"></a>

```csharp
private DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.filter"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters</a>

---


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.booleanFilters">BooleanFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.dateFilters">DateFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.mapFilters">MapFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.numberFilters">NumberFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.stringFilters">StringFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BooleanFilters`<sup>Required</sup> <a name="BooleanFilters" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.booleanFilters"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList BooleanFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList</a>

---

##### `DateFilters`<sup>Required</sup> <a name="DateFilters" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.dateFilters"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList DateFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList</a>

---

##### `MapFilters`<sup>Required</sup> <a name="MapFilters" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.mapFilters"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList MapFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList</a>

---

##### `NumberFilters`<sup>Required</sup> <a name="NumberFilters" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.numberFilters"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList NumberFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList</a>

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `StringFilters`<sup>Required</sup> <a name="StringFilters" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.stringFilters"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList StringFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a>

---


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter</a>

---


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.get"></a>

```csharp
private DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.filter"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters</a>

---


### DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.compositeFilters">CompositeFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.compositeOperator">CompositeOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompositeFilters`<sup>Required</sup> <a name="CompositeFilters" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.compositeFilters"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList CompositeFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList</a>

---

##### `CompositeOperator`<sup>Required</sup> <a name="CompositeOperator" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.compositeOperator"></a>

```csharp
public string CompositeOperator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria</a>

---


### DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference <a name="DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteria">OcsfFindingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2Criteria">DataAwsccSecurityhubAutomationRuleV2Criteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OcsfFindingCriteria`<sup>Required</sup> <a name="OcsfFindingCriteria" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteria"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference OcsfFindingCriteria { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference">DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityhubAutomationRuleV2Criteria InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubAutomationRuleV2.DataAwsccSecurityhubAutomationRuleV2Criteria">DataAwsccSecurityhubAutomationRuleV2Criteria</a>

---



