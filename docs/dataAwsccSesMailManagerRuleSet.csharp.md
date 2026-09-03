# `dataAwsccSesMailManagerRuleSet` Submodule <a name="`dataAwsccSesMailManagerRuleSet` Submodule" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSesMailManagerRuleSet <a name="DataAwsccSesMailManagerRuleSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ses_mail_manager_rule_set awscc_ses_mail_manager_rule_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSet(Construct Scope, string Id, DataAwsccSesMailManagerRuleSetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig">DataAwsccSesMailManagerRuleSetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig">DataAwsccSesMailManagerRuleSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSesMailManagerRuleSet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSesMailManagerRuleSet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSesMailManagerRuleSet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSesMailManagerRuleSet.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSesMailManagerRuleSet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccSesMailManagerRuleSet resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSesMailManagerRuleSet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSesMailManagerRuleSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ses_mail_manager_rule_set#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSesMailManagerRuleSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList">DataAwsccSesMailManagerRuleSetRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.ruleSetArn">RuleSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.ruleSetId">RuleSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.ruleSetName">RuleSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList">DataAwsccSesMailManagerRuleSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.rules"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesList Rules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList">DataAwsccSesMailManagerRuleSetRulesList</a>

---

##### `RuleSetArn`<sup>Required</sup> <a name="RuleSetArn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.ruleSetArn"></a>

```csharp
public string RuleSetArn { get; }
```

- *Type:* string

---

##### `RuleSetId`<sup>Required</sup> <a name="RuleSetId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.ruleSetId"></a>

```csharp
public string RuleSetId { get; }
```

- *Type:* string

---

##### `RuleSetName`<sup>Required</sup> <a name="RuleSetName" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.ruleSetName"></a>

```csharp
public string RuleSetName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.tags"></a>

```csharp
public DataAwsccSesMailManagerRuleSetTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList">DataAwsccSesMailManagerRuleSetTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSesMailManagerRuleSetConfig <a name="DataAwsccSesMailManagerRuleSetConfig" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ses_mail_manager_rule_set#id DataAwsccSesMailManagerRuleSet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSesMailManagerRuleSetRules <a name="DataAwsccSesMailManagerRuleSetRules" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRules {

};
```


### DataAwsccSesMailManagerRuleSetRulesActions <a name="DataAwsccSesMailManagerRuleSetRulesActions" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesActions {

};
```


### DataAwsccSesMailManagerRuleSetRulesActionsAddHeader <a name="DataAwsccSesMailManagerRuleSetRulesActionsAddHeader" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeader.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesActionsAddHeader {

};
```


### DataAwsccSesMailManagerRuleSetRulesActionsArchive <a name="DataAwsccSesMailManagerRuleSetRulesActionsArchive" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchive"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchive.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesActionsArchive {

};
```


### DataAwsccSesMailManagerRuleSetRulesActionsBounce <a name="DataAwsccSesMailManagerRuleSetRulesActionsBounce" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounce"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounce.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesActionsBounce {

};
```


### DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox <a name="DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox {

};
```


### DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness <a name="DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness {

};
```


### DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda <a name="DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda {

};
```


### DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns <a name="DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns {

};
```


### DataAwsccSesMailManagerRuleSetRulesActionsRelay <a name="DataAwsccSesMailManagerRuleSetRulesActionsRelay" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelay"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelay.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesActionsRelay {

};
```


### DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient <a name="DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient {

};
```


### DataAwsccSesMailManagerRuleSetRulesActionsSend <a name="DataAwsccSesMailManagerRuleSetRulesActionsSend" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSend"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSend.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesActionsSend {

};
```


### DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3 <a name="DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3 {

};
```


### DataAwsccSesMailManagerRuleSetRulesConditions <a name="DataAwsccSesMailManagerRuleSetRulesConditions" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditions {

};
```


### DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression <a name="DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression {

};
```


### DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate {

};
```


### DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis <a name="DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis {

};
```


### DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct <a name="DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct {

};
```


### DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression <a name="DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression {

};
```


### DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression <a name="DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression {

};
```


### DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate {

};
```


### DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression <a name="DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression {

};
```


### DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate {

};
```


### DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression <a name="DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression {

};
```


### DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate {

};
```


### DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis <a name="DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis {

};
```


### DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression <a name="DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression {

};
```


### DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate {

};
```


### DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis <a name="DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis {

};
```


### DataAwsccSesMailManagerRuleSetRulesUnless <a name="DataAwsccSesMailManagerRuleSetRulesUnless" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnless"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnless.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnless {

};
```


### DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression <a name="DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression {

};
```


### DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate {

};
```


### DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis <a name="DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis {

};
```


### DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct <a name="DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct {

};
```


### DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression <a name="DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression {

};
```


### DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression <a name="DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression {

};
```


### DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate {

};
```


### DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression <a name="DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression {

};
```


### DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate {

};
```


### DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression <a name="DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression {

};
```


### DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate {

};
```


### DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis <a name="DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis {

};
```


### DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression <a name="DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression {

};
```


### DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate {

};
```


### DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis <a name="DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis {

};
```


### DataAwsccSesMailManagerRuleSetTags <a name="DataAwsccSesMailManagerRuleSetTags" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.headerName">HeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.headerValue">HeaderValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeader">DataAwsccSesMailManagerRuleSetRulesActionsAddHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.headerName"></a>

```csharp
public string HeaderName { get; }
```

- *Type:* string

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.headerValue"></a>

```csharp
public string HeaderValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesActionsAddHeader InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeader">DataAwsccSesMailManagerRuleSetRulesActionsAddHeader</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.actionFailurePolicy">ActionFailurePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.targetArchive">TargetArchive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchive">DataAwsccSesMailManagerRuleSetRulesActionsArchive</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionFailurePolicy`<sup>Required</sup> <a name="ActionFailurePolicy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.actionFailurePolicy"></a>

```csharp
public string ActionFailurePolicy { get; }
```

- *Type:* string

---

##### `TargetArchive`<sup>Required</sup> <a name="TargetArchive" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.targetArchive"></a>

```csharp
public string TargetArchive { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesActionsArchive InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchive">DataAwsccSesMailManagerRuleSetRulesActionsArchive</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.actionFailurePolicy">ActionFailurePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.diagnosticMessage">DiagnosticMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.sender">Sender</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.smtpReplyCode">SmtpReplyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.statusCode">StatusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounce">DataAwsccSesMailManagerRuleSetRulesActionsBounce</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionFailurePolicy`<sup>Required</sup> <a name="ActionFailurePolicy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.actionFailurePolicy"></a>

```csharp
public string ActionFailurePolicy { get; }
```

- *Type:* string

---

##### `DiagnosticMessage`<sup>Required</sup> <a name="DiagnosticMessage" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.diagnosticMessage"></a>

```csharp
public string DiagnosticMessage { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Sender`<sup>Required</sup> <a name="Sender" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.sender"></a>

```csharp
public string Sender { get; }
```

- *Type:* string

---

##### `SmtpReplyCode`<sup>Required</sup> <a name="SmtpReplyCode" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.smtpReplyCode"></a>

```csharp
public string SmtpReplyCode { get; }
```

- *Type:* string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.statusCode"></a>

```csharp
public string StatusCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesActionsBounce InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounce">DataAwsccSesMailManagerRuleSetRulesActionsBounce</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.actionFailurePolicy">ActionFailurePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.mailboxArn">MailboxArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox">DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionFailurePolicy`<sup>Required</sup> <a name="ActionFailurePolicy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.actionFailurePolicy"></a>

```csharp
public string ActionFailurePolicy { get; }
```

- *Type:* string

---

##### `MailboxArn`<sup>Required</sup> <a name="MailboxArn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.mailboxArn"></a>

```csharp
public string MailboxArn { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox">DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.actionFailurePolicy">ActionFailurePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.indexId">IndexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness">DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionFailurePolicy`<sup>Required</sup> <a name="ActionFailurePolicy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.actionFailurePolicy"></a>

```csharp
public string ActionFailurePolicy { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.indexId"></a>

```csharp
public string IndexId { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness">DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.actionFailurePolicy">ActionFailurePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.functionArn">FunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.invocationType">InvocationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.retryTimeMinutes">RetryTimeMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda">DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionFailurePolicy`<sup>Required</sup> <a name="ActionFailurePolicy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.actionFailurePolicy"></a>

```csharp
public string ActionFailurePolicy { get; }
```

- *Type:* string

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.functionArn"></a>

```csharp
public string FunctionArn { get; }
```

- *Type:* string

---

##### `InvocationType`<sup>Required</sup> <a name="InvocationType" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.invocationType"></a>

```csharp
public string InvocationType { get; }
```

- *Type:* string

---

##### `RetryTimeMinutes`<sup>Required</sup> <a name="RetryTimeMinutes" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.retryTimeMinutes"></a>

```csharp
public double RetryTimeMinutes { get; }
```

- *Type:* double

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda">DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsList <a name="DataAwsccSesMailManagerRuleSetRulesActionsList" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.get"></a>

```csharp
private DataAwsccSesMailManagerRuleSetRulesActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSesMailManagerRuleSetRulesActionsOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.addHeader">AddHeader</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.archive">Archive</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.bounce">Bounce</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.deliverToMailbox">DeliverToMailbox</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.deliverToQBusiness">DeliverToQBusiness</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.drop">Drop</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.invokeLambda">InvokeLambda</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.publishToSns">PublishToSns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.relay">Relay</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.replaceRecipient">ReplaceRecipient</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.send">Send</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.writeToS3">WriteToS3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference">DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActions">DataAwsccSesMailManagerRuleSetRulesActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddHeader`<sup>Required</sup> <a name="AddHeader" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.addHeader"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference AddHeader { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference</a>

---

##### `Archive`<sup>Required</sup> <a name="Archive" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.archive"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference Archive { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference</a>

---

##### `Bounce`<sup>Required</sup> <a name="Bounce" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.bounce"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference Bounce { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference</a>

---

##### `DeliverToMailbox`<sup>Required</sup> <a name="DeliverToMailbox" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.deliverToMailbox"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference DeliverToMailbox { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference</a>

---

##### `DeliverToQBusiness`<sup>Required</sup> <a name="DeliverToQBusiness" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.deliverToQBusiness"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference DeliverToQBusiness { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference</a>

---

##### `Drop`<sup>Required</sup> <a name="Drop" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.drop"></a>

```csharp
public string Drop { get; }
```

- *Type:* string

---

##### `InvokeLambda`<sup>Required</sup> <a name="InvokeLambda" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.invokeLambda"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference InvokeLambda { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference</a>

---

##### `PublishToSns`<sup>Required</sup> <a name="PublishToSns" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.publishToSns"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference PublishToSns { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference</a>

---

##### `Relay`<sup>Required</sup> <a name="Relay" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.relay"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference Relay { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference</a>

---

##### `ReplaceRecipient`<sup>Required</sup> <a name="ReplaceRecipient" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.replaceRecipient"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference ReplaceRecipient { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference</a>

---

##### `Send`<sup>Required</sup> <a name="Send" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.send"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference Send { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference</a>

---

##### `WriteToS3`<sup>Required</sup> <a name="WriteToS3" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.writeToS3"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference WriteToS3 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference">DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesActions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActions">DataAwsccSesMailManagerRuleSetRulesActions</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.actionFailurePolicy">ActionFailurePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.payloadType">PayloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.topicArn">TopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns">DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionFailurePolicy`<sup>Required</sup> <a name="ActionFailurePolicy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.actionFailurePolicy"></a>

```csharp
public string ActionFailurePolicy { get; }
```

- *Type:* string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `PayloadType`<sup>Required</sup> <a name="PayloadType" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.payloadType"></a>

```csharp
public string PayloadType { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.topicArn"></a>

```csharp
public string TopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns">DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.actionFailurePolicy">ActionFailurePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.mailFrom">MailFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.relay">Relay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelay">DataAwsccSesMailManagerRuleSetRulesActionsRelay</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionFailurePolicy`<sup>Required</sup> <a name="ActionFailurePolicy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.actionFailurePolicy"></a>

```csharp
public string ActionFailurePolicy { get; }
```

- *Type:* string

---

##### `MailFrom`<sup>Required</sup> <a name="MailFrom" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.mailFrom"></a>

```csharp
public string MailFrom { get; }
```

- *Type:* string

---

##### `Relay`<sup>Required</sup> <a name="Relay" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.relay"></a>

```csharp
public string Relay { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesActionsRelay InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelay">DataAwsccSesMailManagerRuleSetRulesActionsRelay</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.property.replaceWith">ReplaceWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient">DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReplaceWith`<sup>Required</sup> <a name="ReplaceWith" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.property.replaceWith"></a>

```csharp
public string[] ReplaceWith { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient">DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.actionFailurePolicy">ActionFailurePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSend">DataAwsccSesMailManagerRuleSetRulesActionsSend</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionFailurePolicy`<sup>Required</sup> <a name="ActionFailurePolicy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.actionFailurePolicy"></a>

```csharp
public string ActionFailurePolicy { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesActionsSend InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSend">DataAwsccSesMailManagerRuleSetRulesActionsSend</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.actionFailurePolicy">ActionFailurePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.s3Prefix">S3Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.s3SseKmsKeyId">S3SseKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3">DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionFailurePolicy`<sup>Required</sup> <a name="ActionFailurePolicy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.actionFailurePolicy"></a>

```csharp
public string ActionFailurePolicy { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `S3Prefix`<sup>Required</sup> <a name="S3Prefix" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.s3Prefix"></a>

```csharp
public string S3Prefix { get; }
```

- *Type:* string

---

##### `S3SseKmsKeyId`<sup>Required</sup> <a name="S3SseKmsKeyId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.s3SseKmsKeyId"></a>

```csharp
public string S3SseKmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3 InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3">DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.analyzer">Analyzer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.resultField">ResultField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Analyzer`<sup>Required</sup> <a name="Analyzer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```csharp
public string Analyzer { get; }
```

- *Type:* string

---

##### `ResultField`<sup>Required</sup> <a name="ResultField" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```csharp
public string ResultField { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressLists">AddressLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressLists`<sup>Required</sup> <a name="AddressLists" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressLists"></a>

```csharp
public string[] AddressLists { get; }
```

- *Type:* string[]

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.analysis">Analysis</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.isInAddressList">IsInAddressList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Analysis`<sup>Required</sup> <a name="Analysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.analysis"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference Analysis { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference</a>

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `IsInAddressList`<sup>Required</sup> <a name="IsInAddressList" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.isInAddressList"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference IsInAddressList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.evaluate"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference Evaluate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference</a>

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression">DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression">DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression">DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.evaluate"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference Evaluate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference</a>

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression">DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsList <a name="DataAwsccSesMailManagerRuleSetRulesConditionsList" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.get"></a>

```csharp
private DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression">DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.evaluate"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference Evaluate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference</a>

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression">DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.booleanExpression">BooleanExpression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.dmarcExpression">DmarcExpression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.ipExpression">IpExpression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.numberExpression">NumberExpression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.stringExpression">StringExpression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.verdictExpression">VerdictExpression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditions">DataAwsccSesMailManagerRuleSetRulesConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BooleanExpression`<sup>Required</sup> <a name="BooleanExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.booleanExpression"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference BooleanExpression { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference</a>

---

##### `DmarcExpression`<sup>Required</sup> <a name="DmarcExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.dmarcExpression"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference DmarcExpression { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference</a>

---

##### `IpExpression`<sup>Required</sup> <a name="IpExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.ipExpression"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference IpExpression { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference</a>

---

##### `NumberExpression`<sup>Required</sup> <a name="NumberExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.numberExpression"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference NumberExpression { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference</a>

---

##### `StringExpression`<sup>Required</sup> <a name="StringExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.stringExpression"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference StringExpression { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference</a>

---

##### `VerdictExpression`<sup>Required</sup> <a name="VerdictExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.verdictExpression"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference VerdictExpression { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditions">DataAwsccSesMailManagerRuleSetRulesConditions</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.analyzer">Analyzer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.resultField">ResultField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Analyzer`<sup>Required</sup> <a name="Analyzer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```csharp
public string Analyzer { get; }
```

- *Type:* string

---

##### `ResultField`<sup>Required</sup> <a name="ResultField" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```csharp
public string ResultField { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.analysis">Analysis</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.clientCertificateAttribute">ClientCertificateAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.mimeHeaderAttribute">MimeHeaderAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Analysis`<sup>Required</sup> <a name="Analysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.analysis"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference Analysis { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference</a>

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `ClientCertificateAttribute`<sup>Required</sup> <a name="ClientCertificateAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.clientCertificateAttribute"></a>

```csharp
public string ClientCertificateAttribute { get; }
```

- *Type:* string

---

##### `MimeHeaderAttribute`<sup>Required</sup> <a name="MimeHeaderAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.mimeHeaderAttribute"></a>

```csharp
public string MimeHeaderAttribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.evaluate"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference Evaluate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference</a>

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.analyzer">Analyzer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.resultField">ResultField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Analyzer`<sup>Required</sup> <a name="Analyzer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```csharp
public string Analyzer { get; }
```

- *Type:* string

---

##### `ResultField`<sup>Required</sup> <a name="ResultField" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```csharp
public string ResultField { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.analysis">Analysis</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Analysis`<sup>Required</sup> <a name="Analysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.analysis"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference Analysis { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference</a>

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.evaluate"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference Evaluate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference</a>

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesList <a name="DataAwsccSesMailManagerRuleSetRulesList" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.get"></a>

```csharp
private DataAwsccSesMailManagerRuleSetRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSesMailManagerRuleSetRulesOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList">DataAwsccSesMailManagerRuleSetRulesActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList">DataAwsccSesMailManagerRuleSetRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.unless">Unless</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList">DataAwsccSesMailManagerRuleSetRulesUnlessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRules">DataAwsccSesMailManagerRuleSetRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.actions"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesActionsList Actions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList">DataAwsccSesMailManagerRuleSetRulesActionsList</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.conditions"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList">DataAwsccSesMailManagerRuleSetRulesConditionsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Unless`<sup>Required</sup> <a name="Unless" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.unless"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessList Unless { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList">DataAwsccSesMailManagerRuleSetRulesUnlessList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRules InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRules">DataAwsccSesMailManagerRuleSetRules</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.analyzer">Analyzer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.resultField">ResultField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Analyzer`<sup>Required</sup> <a name="Analyzer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```csharp
public string Analyzer { get; }
```

- *Type:* string

---

##### `ResultField`<sup>Required</sup> <a name="ResultField" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```csharp
public string ResultField { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressLists">AddressLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressLists`<sup>Required</sup> <a name="AddressLists" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressLists"></a>

```csharp
public string[] AddressLists { get; }
```

- *Type:* string[]

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.analysis">Analysis</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.isInAddressList">IsInAddressList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Analysis`<sup>Required</sup> <a name="Analysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.analysis"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference Analysis { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference</a>

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `IsInAddressList`<sup>Required</sup> <a name="IsInAddressList" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.isInAddressList"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference IsInAddressList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.evaluate"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference Evaluate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference</a>

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression">DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression">DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression">DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.evaluate"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference Evaluate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference</a>

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression">DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessList <a name="DataAwsccSesMailManagerRuleSetRulesUnlessList" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.get"></a>

```csharp
private DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression">DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.evaluate"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference Evaluate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference</a>

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression">DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.booleanExpression">BooleanExpression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.dmarcExpression">DmarcExpression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.ipExpression">IpExpression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.numberExpression">NumberExpression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.stringExpression">StringExpression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.verdictExpression">VerdictExpression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnless">DataAwsccSesMailManagerRuleSetRulesUnless</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BooleanExpression`<sup>Required</sup> <a name="BooleanExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.booleanExpression"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference BooleanExpression { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference</a>

---

##### `DmarcExpression`<sup>Required</sup> <a name="DmarcExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.dmarcExpression"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference DmarcExpression { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference</a>

---

##### `IpExpression`<sup>Required</sup> <a name="IpExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.ipExpression"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference IpExpression { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference</a>

---

##### `NumberExpression`<sup>Required</sup> <a name="NumberExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.numberExpression"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference NumberExpression { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference</a>

---

##### `StringExpression`<sup>Required</sup> <a name="StringExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.stringExpression"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference StringExpression { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference</a>

---

##### `VerdictExpression`<sup>Required</sup> <a name="VerdictExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.verdictExpression"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference VerdictExpression { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnless InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnless">DataAwsccSesMailManagerRuleSetRulesUnless</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.analyzer">Analyzer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.resultField">ResultField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Analyzer`<sup>Required</sup> <a name="Analyzer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```csharp
public string Analyzer { get; }
```

- *Type:* string

---

##### `ResultField`<sup>Required</sup> <a name="ResultField" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```csharp
public string ResultField { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.analysis">Analysis</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.clientCertificateAttribute">ClientCertificateAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.mimeHeaderAttribute">MimeHeaderAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Analysis`<sup>Required</sup> <a name="Analysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.analysis"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference Analysis { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference</a>

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `ClientCertificateAttribute`<sup>Required</sup> <a name="ClientCertificateAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.clientCertificateAttribute"></a>

```csharp
public string ClientCertificateAttribute { get; }
```

- *Type:* string

---

##### `MimeHeaderAttribute`<sup>Required</sup> <a name="MimeHeaderAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.mimeHeaderAttribute"></a>

```csharp
public string MimeHeaderAttribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.evaluate"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference Evaluate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference</a>

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.analyzer">Analyzer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.resultField">ResultField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Analyzer`<sup>Required</sup> <a name="Analyzer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```csharp
public string Analyzer { get; }
```

- *Type:* string

---

##### `ResultField`<sup>Required</sup> <a name="ResultField" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```csharp
public string ResultField { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.analysis">Analysis</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Analysis`<sup>Required</sup> <a name="Analysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.analysis"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference Analysis { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference</a>

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.evaluate"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference Evaluate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference</a>

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression</a>

---


### DataAwsccSesMailManagerRuleSetTagsList <a name="DataAwsccSesMailManagerRuleSetTagsList" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.get"></a>

```csharp
private DataAwsccSesMailManagerRuleSetTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSesMailManagerRuleSetTagsOutputReference <a name="DataAwsccSesMailManagerRuleSetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerRuleSetTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTags">DataAwsccSesMailManagerRuleSetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerRuleSetTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTags">DataAwsccSesMailManagerRuleSetTags</a>

---



