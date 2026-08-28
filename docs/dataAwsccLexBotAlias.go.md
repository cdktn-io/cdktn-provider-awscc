# `dataAwsccLexBotAlias` Submodule <a name="`dataAwsccLexBotAlias` Submodule" id="@cdktn/provider-awscc.dataAwsccLexBotAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLexBotAlias <a name="DataAwsccLexBotAlias" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lex_bot_alias awscc_lex_bot_alias}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

dataawscclexbotalias.NewDataAwsccLexBotAlias(scope Construct, id *string, config DataAwsccLexBotAliasConfig) DataAwsccLexBotAlias
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig">DataAwsccLexBotAliasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig">DataAwsccLexBotAliasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLexBotAlias resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

dataawscclexbotalias.DataAwsccLexBotAlias_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

dataawscclexbotalias.DataAwsccLexBotAlias_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

dataawscclexbotalias.DataAwsccLexBotAlias_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

dataawscclexbotalias.DataAwsccLexBotAlias_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccLexBotAlias resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccLexBotAlias to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccLexBotAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lex_bot_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLexBotAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasId">BotAliasId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasLocaleSettings">BotAliasLocaleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList">DataAwsccLexBotAliasBotAliasLocaleSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasName">BotAliasName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasStatus">BotAliasStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasTags">BotAliasTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList">DataAwsccLexBotAliasBotAliasTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botId">BotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botVersion">BotVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.conversationLogSettings">ConversationLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference">DataAwsccLexBotAliasConversationLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.sentimentAnalysisSettings">SentimentAnalysisSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference">DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `BotAliasId`<sup>Required</sup> <a name="BotAliasId" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasId"></a>

```go
func BotAliasId() *string
```

- *Type:* *string

---

##### `BotAliasLocaleSettings`<sup>Required</sup> <a name="BotAliasLocaleSettings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasLocaleSettings"></a>

```go
func BotAliasLocaleSettings() DataAwsccLexBotAliasBotAliasLocaleSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList">DataAwsccLexBotAliasBotAliasLocaleSettingsList</a>

---

##### `BotAliasName`<sup>Required</sup> <a name="BotAliasName" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasName"></a>

```go
func BotAliasName() *string
```

- *Type:* *string

---

##### `BotAliasStatus`<sup>Required</sup> <a name="BotAliasStatus" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasStatus"></a>

```go
func BotAliasStatus() *string
```

- *Type:* *string

---

##### `BotAliasTags`<sup>Required</sup> <a name="BotAliasTags" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasTags"></a>

```go
func BotAliasTags() DataAwsccLexBotAliasBotAliasTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList">DataAwsccLexBotAliasBotAliasTagsList</a>

---

##### `BotId`<sup>Required</sup> <a name="BotId" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botId"></a>

```go
func BotId() *string
```

- *Type:* *string

---

##### `BotVersion`<sup>Required</sup> <a name="BotVersion" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botVersion"></a>

```go
func BotVersion() *string
```

- *Type:* *string

---

##### `ConversationLogSettings`<sup>Required</sup> <a name="ConversationLogSettings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.conversationLogSettings"></a>

```go
func ConversationLogSettings() DataAwsccLexBotAliasConversationLogSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference">DataAwsccLexBotAliasConversationLogSettingsOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `SentimentAnalysisSettings`<sup>Required</sup> <a name="SentimentAnalysisSettings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.sentimentAnalysisSettings"></a>

```go
func SentimentAnalysisSettings() DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference">DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLexBotAliasBotAliasLocaleSettings <a name="DataAwsccLexBotAliasBotAliasLocaleSettings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

&dataawscclexbotalias.DataAwsccLexBotAliasBotAliasLocaleSettings {

}
```


### DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting <a name="DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

&dataawscclexbotalias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting {

}
```


### DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification <a name="DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

&dataawscclexbotalias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification {

}
```


### DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook <a name="DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

&dataawscclexbotalias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook {

}
```


### DataAwsccLexBotAliasBotAliasTags <a name="DataAwsccLexBotAliasBotAliasTags" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

&dataawscclexbotalias.DataAwsccLexBotAliasBotAliasTags {

}
```


### DataAwsccLexBotAliasConfig <a name="DataAwsccLexBotAliasConfig" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

&dataawscclexbotalias.DataAwsccLexBotAliasConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lex_bot_alias#id DataAwsccLexBotAlias#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLexBotAliasConversationLogSettings <a name="DataAwsccLexBotAliasConversationLogSettings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

&dataawscclexbotalias.DataAwsccLexBotAliasConversationLogSettings {

}
```


### DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings <a name="DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

&dataawscclexbotalias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings {

}
```


### DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination <a name="DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

&dataawscclexbotalias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination {

}
```


### DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket <a name="DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

&dataawscclexbotalias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket {

}
```


### DataAwsccLexBotAliasConversationLogSettingsTextLogSettings <a name="DataAwsccLexBotAliasConversationLogSettingsTextLogSettings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

&dataawscclexbotalias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettings {

}
```


### DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination <a name="DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

&dataawscclexbotalias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination {

}
```


### DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch <a name="DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

&dataawscclexbotalias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch {

}
```


### DataAwsccLexBotAliasSentimentAnalysisSettings <a name="DataAwsccLexBotAliasSentimentAnalysisSettings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

&dataawscclexbotalias.DataAwsccLexBotAliasSentimentAnalysisSettings {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference <a name="DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

dataawscclexbotalias.NewDataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.codeHookInterfaceVersion">CodeHookInterfaceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeHookInterfaceVersion`<sup>Required</sup> <a name="CodeHookInterfaceVersion" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.codeHookInterfaceVersion"></a>

```go
func CodeHookInterfaceVersion() *string
```

- *Type:* *string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.lambdaArn"></a>

```go
func LambdaArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook</a>

---


### DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference <a name="DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

dataawscclexbotalias.NewDataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.lambdaCodeHook">LambdaCodeHook</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdaCodeHook`<sup>Required</sup> <a name="LambdaCodeHook" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.lambdaCodeHook"></a>

```go
func LambdaCodeHook() DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification</a>

---


### DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference <a name="DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

dataawscclexbotalias.NewDataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.codeHookSpecification">CodeHookSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeHookSpecification`<sup>Required</sup> <a name="CodeHookSpecification" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.codeHookSpecification"></a>

```go
func CodeHookSpecification() DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting</a>

---


### DataAwsccLexBotAliasBotAliasLocaleSettingsList <a name="DataAwsccLexBotAliasBotAliasLocaleSettingsList" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

dataawscclexbotalias.NewDataAwsccLexBotAliasBotAliasLocaleSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLexBotAliasBotAliasLocaleSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.get"></a>

```go
func Get(index *f64) DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference <a name="DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

dataawscclexbotalias.NewDataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.botAliasLocaleSetting">BotAliasLocaleSetting</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.localeId">LocaleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettings">DataAwsccLexBotAliasBotAliasLocaleSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BotAliasLocaleSetting`<sup>Required</sup> <a name="BotAliasLocaleSetting" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.botAliasLocaleSetting"></a>

```go
func BotAliasLocaleSetting() DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference</a>

---

##### `LocaleId`<sup>Required</sup> <a name="LocaleId" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.localeId"></a>

```go
func LocaleId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLexBotAliasBotAliasLocaleSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettings">DataAwsccLexBotAliasBotAliasLocaleSettings</a>

---


### DataAwsccLexBotAliasBotAliasTagsList <a name="DataAwsccLexBotAliasBotAliasTagsList" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

dataawscclexbotalias.NewDataAwsccLexBotAliasBotAliasTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLexBotAliasBotAliasTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.get"></a>

```go
func Get(index *f64) DataAwsccLexBotAliasBotAliasTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLexBotAliasBotAliasTagsOutputReference <a name="DataAwsccLexBotAliasBotAliasTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

dataawscclexbotalias.NewDataAwsccLexBotAliasBotAliasTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLexBotAliasBotAliasTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTags">DataAwsccLexBotAliasBotAliasTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLexBotAliasBotAliasTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTags">DataAwsccLexBotAliasBotAliasTags</a>

---


### DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference <a name="DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

dataawscclexbotalias.NewDataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.s3Bucket">S3Bucket</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.s3Bucket"></a>

```go
func S3Bucket() DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination</a>

---


### DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference <a name="DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

dataawscclexbotalias.NewDataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.logPrefix">LogPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.s3BucketArn">S3BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `LogPrefix`<sup>Required</sup> <a name="LogPrefix" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.logPrefix"></a>

```go
func LogPrefix() *string
```

- *Type:* *string

---

##### `S3BucketArn`<sup>Required</sup> <a name="S3BucketArn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.s3BucketArn"></a>

```go
func S3BucketArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket</a>

---


### DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList <a name="DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

dataawscclexbotalias.NewDataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.get"></a>

```go
func Get(index *f64) DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference <a name="DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

dataawscclexbotalias.NewDataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.destination"></a>

```go
func Destination() DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings</a>

---


### DataAwsccLexBotAliasConversationLogSettingsOutputReference <a name="DataAwsccLexBotAliasConversationLogSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

dataawscclexbotalias.NewDataAwsccLexBotAliasConversationLogSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLexBotAliasConversationLogSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.audioLogSettings">AudioLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.textLogSettings">TextLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettings">DataAwsccLexBotAliasConversationLogSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudioLogSettings`<sup>Required</sup> <a name="AudioLogSettings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.audioLogSettings"></a>

```go
func AudioLogSettings() DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList</a>

---

##### `TextLogSettings`<sup>Required</sup> <a name="TextLogSettings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.textLogSettings"></a>

```go
func TextLogSettings() DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLexBotAliasConversationLogSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettings">DataAwsccLexBotAliasConversationLogSettings</a>

---


### DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference <a name="DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

dataawscclexbotalias.NewDataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.cloudwatchLogGroupArn">CloudwatchLogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.logPrefix">LogPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogGroupArn`<sup>Required</sup> <a name="CloudwatchLogGroupArn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.cloudwatchLogGroupArn"></a>

```go
func CloudwatchLogGroupArn() *string
```

- *Type:* *string

---

##### `LogPrefix`<sup>Required</sup> <a name="LogPrefix" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.logPrefix"></a>

```go
func LogPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch</a>

---


### DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference <a name="DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

dataawscclexbotalias.NewDataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.cloudwatch">Cloudwatch</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cloudwatch`<sup>Required</sup> <a name="Cloudwatch" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.cloudwatch"></a>

```go
func Cloudwatch() DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination</a>

---


### DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList <a name="DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

dataawscclexbotalias.NewDataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.get"></a>

```go
func Get(index *f64) DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference <a name="DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

dataawscclexbotalias.NewDataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettings">DataAwsccLexBotAliasConversationLogSettingsTextLogSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.destination"></a>

```go
func Destination() DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLexBotAliasConversationLogSettingsTextLogSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettings">DataAwsccLexBotAliasConversationLogSettingsTextLogSettings</a>

---


### DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference <a name="DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclexbotalias"

dataawscclexbotalias.NewDataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.property.detectSentiment">DetectSentiment</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettings">DataAwsccLexBotAliasSentimentAnalysisSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DetectSentiment`<sup>Required</sup> <a name="DetectSentiment" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.property.detectSentiment"></a>

```go
func DetectSentiment() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLexBotAliasSentimentAnalysisSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettings">DataAwsccLexBotAliasSentimentAnalysisSettings</a>

---



